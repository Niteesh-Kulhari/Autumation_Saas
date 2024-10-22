import WorkFlowButton from "./_components/workflow-button"

const Workflows = ( ) => {
    return (
        <div className="flex flex-col gap-4 relative"> 
            <h1 className=" top-0 z-[10] bg-background/50 backdrop-blur-lg border-b text-4xl p-6 flex justify-between items-center">Workflows <WorkFlowButton/></h1>
        </div>
    )
}


export default Workflows