import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password is required and must contain 8 characters"
    })
})