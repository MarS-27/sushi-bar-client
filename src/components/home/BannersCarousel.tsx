import { useGetBanners } from '../../hooks/useGetBanners';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const BannersCarousel = () => {
  const { bannersData } = useGetBanners();
  console.log(bannersData);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="custom-swiper"
    >
      {bannersData.map(({ attributes, id }) => (
        <SwiperSlide key={id}>
          <img
            className="w-full rounded-md shadow-md"
            src={attributes.img.data.attributes.url}
            alt={attributes.img.data.attributes.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
