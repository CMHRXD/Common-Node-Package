export function envCheck() {
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    throw new Error("ENV variables not found");
  }
}
