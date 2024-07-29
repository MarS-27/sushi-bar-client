import { type FC } from 'react';
import clsx from 'clsx';
import { useGetContacts } from '../../hooks/useGetContacts';

interface SocialMediaButtonsProps {
  classNameModificator?: string;
}

export const SocialMediaButtons: FC<SocialMediaButtonsProps> = ({
  classNameModificator,
}) => {
  const { contactsData } = useGetContacts();
  const socialMedia = contactsData?.social_media;

  return (
    <div className={clsx('flex items-center gap-2', classNameModificator)}>
      {socialMedia?.map(({ id, link, title, icon }) => (
        <a
          key={id}
          className="transition-all duration-300 hover:scale-110"
          href={link}
          target="_blank"
        >
          <img
            className="h-10 w-10 min-w-[40px]"
            src={icon.data.attributes.url}
            alt={title}
          />
        </a>
      ))}
    </div>
  );
};
