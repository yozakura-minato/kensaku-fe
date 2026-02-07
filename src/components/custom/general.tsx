import Link from "next/link"
import { Search } from "lucide-react"

export function Logo() {
    return (
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>KenSaku</span>
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="border-t py-12 bg-background">
            <div className="container mx-auto px-4 flex justify-center items-center text-sm text-muted-foreground">
                &copy; 2026 KenSaku Platform. All Rights Reserved.
            </div>
        </footer>
    );
}