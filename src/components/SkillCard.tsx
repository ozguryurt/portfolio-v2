const SkillCard = ({icon, label}: {icon: React.ReactNode, label: string}) => {
    return (
        <>
            <div title={label} className="flex aspect-square w-full items-center justify-center rounded-2xl bg-zinc-200 p-3 shadow-sm sm:w-auto sm:p-5 dark:bg-zinc-800">
                <div className='text-4xl sm:text-5xl lg:text-6xl'>
                    {icon}
                </div>
            </div>
        </>
    )
}

export default SkillCard
