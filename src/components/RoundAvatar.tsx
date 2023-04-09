import React from 'react';

import me from '../asstes/me-original.png';

type RoundAvatarProps = React.HTMLAttributes<HTMLElement>;

const RoundAvatar: React.FC<RoundAvatarProps> = ({ className = '' }) => {
  return (
    <div
      className={`overflow-hidden bg-primary dark:bg-white rounded-full transition-all shadow-[0_5px_16px_3px_#828282] dark:shadow-[0_5px_16px_3px_#161517] ${className}`}
    >
      <img src={me} alt="" className="w-full" />
    </div>
  );
};

export default RoundAvatar;
