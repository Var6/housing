import { jwtVerify, SignJWT } from 'jose'

const encoder = new TextEncoder()

export const ADMIN_COOKIE = 'citizen_admin_session'

function getSecret() {
  const secret = process.env.ADMIN_AUTH_SECRET
  if (!secret) {
    throw new Error('ADMIN_AUTH_SECRET is not configured')
  }

  return encoder.encode(secret)
}

export function getConfiguredAdminUsername() {
  return process.env.ADMIN_USERNAME || 'CitizenHousing'
}

export function getConfiguredAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'India@1947'
}

export async function createAdminToken(username: string) {
  return await new SignJWT({ role: 'admin', username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(getSecret())
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload.role === 'admin'
  } catch {
    return false
  }
}
