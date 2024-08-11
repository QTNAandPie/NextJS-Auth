import { CheckCircledIcon } from "@radix-ui/react-icons"

interface FormSuccessProps {
    message? : string
}

export function FormSuccess({message} : FormSuccessProps) {
    if (!message) return null;

    return (
        <div className="bg-green-600/10 p-4 rounded-lg flex items-center gap-x-2 text-[12px] text-emerald-600">
            <CheckCircledIcon />
            <p>{message}</p>
        </div>
    )
}