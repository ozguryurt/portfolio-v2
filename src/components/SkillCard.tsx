const SkillCard = ({icon}: {icon: React.ReactNode}) => {
    return (
        <>
            <div className="flex items-center justify-center gap-3 dark:bg-zinc-800 bg-zinc-200 rounded-2xl p-2 lg:p-5 cursor-pointer">
                <div className='lg:text-6xl text-4xl'>
                    {icon}
                </div>
            </div>
        </>
    )
}

export default SkillCard