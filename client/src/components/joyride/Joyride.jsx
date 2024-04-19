import { useEffect, useState } from 'react';
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';

function JoyrideSidebar() {
  const [run, setRun] = useState(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem('tourCompleted');
    if (tourCompleted) {
      setRun(false); 
    }
  }, []);

  const steps = [
    {
      target: '.one',
      content: 'Hi, Welcome to Simona! Should we start with the tutorial? This is the main navbar. Here you can find your shorthand profile which upon clicking will lead you to the profile page you can edit. Chatbox where you will be able to communicate with your connections and anytime you wish just click on Simona and you will be led back to the homepage',
      placement: 'bottom',
    },
    {
      target: '.two',
      content: 'This section is called the Searching Hub for a reason. Here you can check various members of the hubble just by searching by name, title, or a simple letter. If you wish to search specifically by a category you can also achieve so.',
      placement: 'bottom',
    },
    {
      target: '.three',
      content: 'Top Five signifies the first five connections or profiles you may check out according to their rating and usually are connected to what may be interesting to you. So do click on one of them and dive into their profile page :) ',
      placement: 'bottom',
    },
    {
      target: '.four',
      content: 'Connections are shown on your left side and pending requests on the right. Whenever you connect with a member your connections get displayed first as pending. From there you may wait until you are approved by a member or add those that might want to connect with you. Later you may erase a connection as well.',
      placement: 'bottom',
    },
    {
      target: '.five',
      content: 'The Offer sections offers a display of possibilities. You may check the possible offers of members, add them on your favorites, and even check the applied ones you may have applied for. From there you can jump to the chatbox to communicate with the member who made the offer.',
      placement: 'bottom',
    },
    {
      target: '.six',
      content: 'Every good beginning of a good partnership or friendship starts with chatting. The chatbox is the perfect communication tool for you to talk with your connections!',
      placement: 'bottom',
    },
  ];

  const startTour = () => {
    setRun(true);
  };

  const handleJoyrideCallback = (data) => {
    const { action, type } = data;

    if (type === EVENTS.TOUR_END || action === ACTIONS.SKIP) {
      setRun(false);
      localStorage.setItem('tourCompleted', 'true'); 
    }
  };

  const CustomSkipButton = ({ onClick }) => (
    <button
      className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
      onClick={onClick}
    >
      Skip
    </button>
  );

  return (
    <div className="bg-white p-3 border border-black rounded-tl-[30px] rounded-bl-[30px] shadow-md fixed top-1/2 right-0 transform -translate-y-1/2 z-[200]">
      {!run && (
        <button className="btn-start-tour bg-retroBlue text-white py-2 px-4 rounded-full" onClick={startTour}>
          Start a Tutorial
        </button>
      )}
      <Joyride
        steps={steps}
        run={run}
        callback={handleJoyrideCallback}
        showSkipButton={true}
        disableCloseOnEsc={true}
        disableOverlayClose={true}
        components={{
          SkipButton: CustomSkipButton,
        }}
      />
    </div>
  );
}

export default JoyrideSidebar;









