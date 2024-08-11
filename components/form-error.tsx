import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message? : string
}

export function FormError({message} : FormErrorProps) {
    if (!message) return null;

    return (
        <div className="bg-destructive/10 p-4 rounded-lg flex items-center gap-x-2 text-[12px] text-destructive">
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    )
}