
export default function ChatBoxMain() {
  return (
    <div className=" w-auto p-4 ">  
          <h2>Messages box</h2>
          <div className=" ">
               <form >
                 <label htmlFor="msg"> </label>
                 <textarea name="" id="msg" placeholder="Your message" cols="20" rows="3" className="border border-black"/>
               </form>
               <button className="w-auto bg-blue-400 pl-2 pr-2">sent</button>
          </div>
          
        
    </div>
  )
}
