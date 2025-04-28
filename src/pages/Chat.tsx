import React, { useState } from 'react';
import { SendIcon, PaperclipIcon, SmileIcon, ChevronRightIcon, PhoneIcon, VideoIcon, InfoIcon, SearchIcon } from 'lucide-react';
const Chat = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState('1');
  // Mock data - in a real app, this would come from an API
  const contacts = [{
    id: '1',
    name: 'Sarah Johnson',
    role: 'Recruiter at TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    lastMessage: "Hi John, I'd like to discuss the Senior Frontend Developer position with you.",
    lastMessageTime: '10:30 AM',
    unread: 2,
    online: true
  }, {
    id: '2',
    name: 'Michael Chen',
    role: 'HR Manager at DataSystems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    lastMessage: 'Thanks for applying to our position. When would be a good time to schedule an interview?',
    lastMessageTime: 'Yesterday',
    unread: 0,
    online: false
  }, {
    id: '3',
    name: 'Emma Davis',
    role: 'Talent Acquisition at DesignStudio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    lastMessage: "We've reviewed your portfolio and we're impressed with your work.",
    lastMessageTime: 'Yesterday',
    unread: 0,
    online: true
  }, {
    id: '4',
    name: 'James Wilson',
    role: 'CTO at InnovateCo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    lastMessage: 'Looking forward to our technical discussion tomorrow!',
    lastMessageTime: 'Monday',
    unread: 0,
    online: false
  }];
  const messages = [{
    id: '1',
    senderId: '1',
    text: "Hi John, I hope this message finds you well. I'm Sarah from TechCorp's recruitment team.",
    time: '10:15 AM',
    date: 'Today'
  }, {
    id: '2',
    senderId: '1',
    text: "I came across your profile and I'm impressed with your experience in frontend development. We have an opening for a Senior Frontend Developer role that might be a great fit for you.",
    time: '10:16 AM',
    date: 'Today'
  }, {
    id: '3',
    senderId: 'user',
    text: "Hi Sarah, thanks for reaching out! I'm definitely interested in learning more about the position.",
    time: '10:20 AM',
    date: 'Today'
  }, {
    id: '4',
    senderId: '1',
    text: 'Great to hear that! The role involves leading our frontend team, working with React and TypeScript to build responsive and accessible web applications. You would be collaborating closely with our design and backend teams.',
    time: '10:23 AM',
    date: 'Today'
  }, {
    id: '5',
    senderId: '1',
    text: 'The salary range is $120,000 - $150,000, depending on experience. We also offer remote work options, comprehensive health benefits, and a generous PTO policy.',
    time: '10:24 AM',
    date: 'Today'
  }, {
    id: '6',
    senderId: '1',
    text: 'Would you be interested in scheduling a call to discuss this opportunity in more detail?',
    time: '10:30 AM',
    date: 'Today'
  }];
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to an API
      console.log('Sending message:', message);
      setMessage('');
    }
  };
  const activeContact = contacts.find(contact => contact.id === activeChat);
  return <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{
        height: 'calc(100vh - 180px)'
      }}>
          <div className="flex h-full">
            {/* Contacts Sidebar */}
            <div className="w-full sm:w-1/3 lg:w-1/4 bg-gray-50 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Messages
                </h2>
                <div className="mt-2 relative">
                  <input type="text" placeholder="Search contacts" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="overflow-y-auto" style={{
              height: 'calc(100% - 89px)'
            }}>
                {contacts.map(contact => <div key={contact.id} className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${activeChat === contact.id ? 'bg-blue-50' : ''}`} onClick={() => setActiveChat(contact.id)}>
                    <div className="flex items-start">
                      <div className="relative mr-3">
                        <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                        {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {contact.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {contact.lastMessageTime}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">
                          {contact.role}
                        </p>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {contact.lastMessage}
                        </p>
                      </div>
                      {contact.unread > 0 && <div className="ml-2 bg-blue-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                          {contact.unread}
                        </div>}
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Chat Area */}
            <div className="hidden sm:flex sm:flex-col sm:w-2/3 lg:w-3/4 h-full">
              {activeContact ? <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative mr-3">
                        <img src={activeContact.avatar} alt={activeContact.name} className="w-10 h-10 rounded-full object-cover" />
                        {activeContact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {activeContact.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {activeContact.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <PhoneIcon className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <VideoIcon className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <InfoIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {messages.map(message => <div key={message.id} className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}>
                          {message.senderId !== 'user' && <img src={activeContact.avatar} alt={activeContact.name} className="w-8 h-8 rounded-full object-cover mr-2 mt-1" />}
                          <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${message.senderId === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'} rounded-lg p-3`}>
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${message.senderId === 'user' ? 'text-blue-200' : 'text-gray-500'} text-right`}>
                              {message.time}
                            </p>
                          </div>
                          {message.senderId === 'user' && <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 ml-2 mt-1">
                              JD
                            </div>}
                        </div>)}
                    </div>
                  </div>
                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                      <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <PaperclipIcon className="h-5 w-5" />
                      </button>
                      <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..." className="flex-1 border-0 focus:outline-none focus:ring-0 px-4 py-2" />
                      <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <SmileIcon className="h-5 w-5" />
                      </button>
                      <button type="submit" className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2">
                        <SendIcon className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </> : <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full inline-flex mx-auto mb-4">
                      <SendIcon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Your Messages
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Select a contact to start chatting
                    </p>
                  </div>
                </div>}
            </div>
            {/* Mobile: No Chat Selected State */}
            <div className="flex sm:hidden flex-1 items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex mx-auto mb-4">
                  <SendIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Your Messages
                </h3>
                <p className="text-gray-600 mt-1">
                  Select a contact to start chatting
                </p>
                <p className="text-gray-500 mt-4 text-sm">
                  On mobile, tap a contact to view the conversation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Chat;