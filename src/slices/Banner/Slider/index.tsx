'use client'
import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { dancingScript } from "@/app/components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export type BannerProps = SliceComponentProps<Content.BannerSlice>;

export default function Banner({ slice }: BannerProps): JSX.Element {
  const dancingScriptClassName = dancingScript.className;
  return (
    <div className="cell-lg-8 cell-xl-9">
      <section className="section">
        <Swiper
          direction="vertical"
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          effect="fade"
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="swiper-container swiper-slider swiper-style-2"
        >
          {slice.primary.slide.map((item) => (
            <SwiperSlide
              key={item.title}
              style={{
                backgroundImage: `url(${item.background_image.url})`,
                backgroundSize: 'cover',
                height: '660px'
              }}
            >
              <div className="swiper-slide-caption">
                <div className="shell text-sm-left">
                  <h1 className={dancingScriptClassName} data-caption-animate="slideInDown" data-caption-delay="100">{item.title}</h1>
                  <div className="slider-subtitle-group">
                    <div className="decoration-line" data-caption-animate="slideInDown" data-caption-delay="400"></div>
                    <h4 className={dancingScriptClassName} data-caption-animate="slideInLeft" data-caption-delay="700">{item.description_1}</h4>
                    <h3 className={dancingScriptClassName} data-caption-animate="slideInLeft" data-caption-delay="800">{item.description_2}</h3>
                  </div>
                  <PrismicNextLink className="button button-lg button-white-outline button-square" field={item.button_link}>
                    {item.button_text}
                  </PrismicNextLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}