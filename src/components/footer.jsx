export const Footer = () =>{
    return (
        <div className="">
            <footer className="fixed
                                bottom-0
                                m-auto 
                                p-1 
                                flex 
                                items-center 
                                justify-between
                               
                                w-full
                                bg-red-500">

                 <button className="rounded-full
                                bg-gray-200 py-1.5 px-4
                                flex items-center
                                w-18">
                                <span className="mt-0.5">👍</span>
                                <span className="text-red-400">leave quietly</span>
                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" version="1.1" viewBox="-48 0 511 511.99946" width="70px"></svg>
                                <svg height="20px" viewBox="0 0 426.66667 426.66667" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/>
                    </svg>
            </footer>
        </div>
    )
}