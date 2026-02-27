import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export function extractCloudinaryPublicId(url: string) {
  try {
    if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
      return null
    }

    const parsed = new URL(url)
    const path = parsed.pathname
    const uploadIndex = path.indexOf('/upload/')
    if (uploadIndex === -1) return null

    const afterUpload = path.slice(uploadIndex + '/upload/'.length)
    const withoutVersion = afterUpload.replace(/^v\d+\//, '')
    const lastDot = withoutVersion.lastIndexOf('.')
    if (lastDot === -1) return withoutVersion

    return withoutVersion.slice(0, lastDot)
  } catch {
    return null
  }
}

export async function deleteCloudinaryImagesByUrls(urls: string[]) {
  const publicIds = urls
    .map((url) => extractCloudinaryPublicId(url))
    .filter((id): id is string => Boolean(id))

  if (publicIds.length === 0) {
    return { deleted: 0, failed: [] as string[] }
  }

  const failed: string[] = []
  let deleted = 0

  for (const publicId of publicIds) {
    try {
      const result = await cloudinary.uploader.destroy(publicId, { resource_type: 'image' })
      if (result.result === 'ok' || result.result === 'not found') {
        deleted += 1
      } else {
        failed.push(publicId)
      }
    } catch {
      failed.push(publicId)
    }
  }

  return { deleted, failed }
}
