import { CONNECTIONS } from "@/lib/constants"
import ConnectionCard from "./_components/connections-card"

type Props = {
    searchParams?: {[key:string]: string | undefined}
}

const Connections = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b text-4xl p-6 bg-background/50 backdrop-blur-lg">
                Connections
            </h1>
            <div className="realtive flex flex-col gap-4">
                <section className="flex flex-col gap-4 p-6 text-muted-foreground">
                    Connect all your apps directly from here. You may need to Connect
                    these apps regularly to refresh verifcation
                    {CONNECTIONS.map((connection) => (
                        <ConnectionCard 
                        key={connection.title}
                        description={connection.description}
                        title={connection.title}
                        type={connection.title}
                        icon={connection.image}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Connections