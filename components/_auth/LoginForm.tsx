import { CardWrapper } from "./CardWrapper";

export function LoginForm() {
    return (
        <CardWrapper
            headerLabel="Hello my deer again"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form
        </CardWrapper>
    )
}