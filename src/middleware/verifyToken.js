import jwt from "jsonwebtoken";

export const verifyToken = async (request, reply) => {
  try {
    const authHeader = request.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return reply.status(401).send({ message: "Access token required" });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    req.user = decode;
    return true;
  } catch (error) {
    return reply.status(403).send({ message: "Invalid or expired token" });
  }
};
