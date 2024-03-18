import ChatBoxSideBar from "./chatBoxSideBar.jsx"
import ChatBoxMain from "./chatBoxMain.jsx"
export default function ChatBox() {
  return (<>
  <div className="w-auto bg-blue-200 p-4 md:w-2/4 md:m-auto ">
        <h1 className="w-full text-center">Chatbox</h1>
        <div className="  flex flex-wrap items-center gap-10 md:flex md:justify-center ">
        <ChatBoxSideBar/>
        <ChatBoxMain/>
        </div>
        
    </div>
   
    </>
  )
}
