import { FC } from 'react';
import { Icons } from '../../assets/icons';

type AppLogoProps = {
  background?: 'full' | 'logo';
};
export const AppLogo: FC<AppLogoProps> = ({ background = 'full' }) => {
  return (
    <div className="dark:text-white text-black">
      {background === 'full' ? <Icons.FullLogo /> : <Icons.Logo />}
    </div>
  );
};
