import { User } from 'lucide-react';

export default function ChatBoxSideBar() {
  return (<>
   
   
    <div className="w-auto bg-blue-100 p-4 ">
    <h1 className="w-full text-start">live</h1>
      <ul>
          <li className="flex items-center"><User className="mr-2"/>Tyhe</li>
          <li className="flex items-center"><User className="mr-2"/>Fede</li>
          <li className="flex items-center"><User className="mr-2"/>Kostas</li>
          <li className="flex items-center"><User className="mr-2"/>Issa</li>
          <li className="flex items-center"><User className="mr-2"/>Falula</li>
      </ul>
    </div>
    </>)
}
