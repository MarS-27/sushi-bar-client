import { useGetBanners } from '../../hooks/useGetBanners';

export const BannersCarousel = () => {
  const { bannersData } = useGetBanners();
  console.log(bannersData);

  return (
    <div>
      <p>BannersCarousel</p>
    </div>
  );
};
