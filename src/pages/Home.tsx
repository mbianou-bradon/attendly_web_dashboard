

export default function Home(){

    return (
        <div className="px-5">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- gap-y-7 [&>*]:w-[25rem] [&>*]:h-fit [&>*]:py-3 [&>*]:rounded-xl [&>*]:border-2 [&>*]:border-primary/20 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*>h2]:text-xl [&>*>h2]:font-semibold [&>*>h2]:pb-2 [&>*]:">
                    <div>
                        <h2>Course Title: CEF347</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-green-500 hover:bg-green-600">OPEN</button>
                        </div>
                    </div>
                    <div>
                        <h2>Course Title: CEF350</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-red-500 hover:bg-red-600">CLOSED</button>
                        </div>
                    </div>
                    <div>
                        <h2>Course Title: CEF445</h2>
                        <div className="[&>*]:px-6 [&>*]:py-2 [&>*]:rounded-md [&>*:hover]:cursor-pointer flex justify-around gap-4 text-neutral_white">
                            <button className="bg-yellow-400 hover:bg-yellow-500">View Attendance</button>
                            <button className="bg-green-500 hover:bg-green-600">OPEN</button>
                        </div>
                    </div>
                  
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
                    {/* <div>
                        <h2 className="text-3xl font-bold mb-5">Time Spent</h2>
                    </div> */}
                    {/* <div>
                        <h2 className="text-3xl font-bold mb-5">Frequency</h2>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-5 [&>*>div]:w-full [&>*>div]:h-[4.7rem] [&>*>div]:py-2 [&>*>div]:rounded-3xl [&>*>div]:bg-primary/20 [&>*>div]:flex [&>*>div]:flex-col [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:mb-1 [&>*>div>h2]:text-lg [&>*>div>h2]:font-semibold [&>*>div>p]:text-sm [&>*>p]:text-[0.35rem] [&>*>p]:w-[85%] [&>*>p]:mx-auto">
                            <div>
                                <div>
                                    <h2>Active user rate</h2>
                                    <p>70%</p>
                                </div>
                                <p>This measures the percentage of total users who have used the app with a certain time period</p>
                            </div>

                            <div>
                                <div>
                                    <h2>Active engagement</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures how often users using the app, such as the number of times they have logged in or the frequency of their interactions with other users</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User session length</h2>
                                    <p>65%</p>
                                </div>
                                <p>This measures how long users are spending on the app during each session</p>
                            </div>

                            <div>
                                <div>
                                    <h2>User retention rate</h2>
                                    <p>80%</p>
                                </div>
                                <p>This measures the percentage of users who continue to use the app oveer time, such as the percentage of users who return to the app after one week, two weeks, or one month.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}