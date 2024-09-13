'use client'
import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { dancingScript } from "@/app/components/Header";

export type BannerProps = SliceComponentProps<Content.BannerSlice>;

export default function Form({ slice }: BannerProps): JSX.Element {
  const dancingScriptClassName = dancingScript.className;
    return (
        <div className="cell-lg-8 cell-xl-9">
            <section className="section">
              <div className="swiper-container swiper-slider swiper-style-2" data-loop="false" data-autoplay="5500" data-simulate-touch="false" data-slide-effect="slide" data-direction="vertical">
                <div className="swiper-wrapper">
                {slice.primary.slide.map((item) => (
                  <div  key={item.title} className="swiper-slide" data-slide-bg={item.background_image.url}>
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
                  </div>
                ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </section>
          </div>
    )
}