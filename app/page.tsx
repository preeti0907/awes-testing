import * as React from "react"
import Image from "next/image"
import axios from "axios";
const backendApiUrl = "https://www.api.awesmatic.in";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import { Product } from '../schemas/ProductSchema';


import { AspectRatio } from "@/components/ui/aspect-ratio"
import ProductCard from "@/components/product/productCard"


async function getData() {
  const res = await fetch("https://www.api.awesmatic.in/api/customer/homepage_data")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const result = await getData()
  const categories = result.data.shop_by_category;
  const herosection = result.data.homepage_banners;
  const bestSellerDeal: Product[] = result.data.deals[0].products;
  const SummerSaleDeal: Product[] = result.data.deals[4].products;
  const NewArrivalDeal: Product[] = result.data.deals[1].products;

  // const Brands = result.data.brand;
  

  return (

    <>
      <header className="p-5">
        header
      </header>
      {/* Hero section start */}
      <section className="hero_carousel w-full">
        <Carousel opts={{align: "start", loop: true }} className="w-full " >
          <CarouselContent>
            {herosection.map(({ id, banner, mobile_banner }: any) => (
              <CarouselItem key={id}>
                <div className="desktop">
                  <AspectRatio ratio={1920 / 464}>
                    <Image fill src={banner} className=" w-full object-cover" alt="hero_img" />
                  </AspectRatio>
                </div>
                <div className="mobile">
                  <AspectRatio ratio={547 / 365}>
                    <Image fill src={mobile_banner} className=" w-full object-cover" alt="hero_img" />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Hero section end */}
      </section>

      <section className="category_carousel container p-0 sm:p-auto mt-4">
        <div className="my-4">
          <p className="text-3xl text-center font-bold uppercase">Shop By Category</p>
        </div>

        <Carousel opts={{align: "start", loop: true }} className="w-full " >
          <CarouselContent>

            {categories.map(({ id, icon, name }: any) => (
              <CarouselItem key={id} className="basis-1/4 lg:basis-1/6 text-center">
                <AspectRatio ratio={1 / 1}>
                  <Image src={icon} className="w-100 rounded" fill alt={name} />
                </AspectRatio>
                <div className="p-1 text-center">
                  <span className="font-semibold text-xs md:text-sm uppercase my_truncate">{name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </section>

      <section className="mt-4 container">
        <div className="my-4">
          <p className="text-3xl text-center font-bold uppercase">Best Seller</p>
        </div>
        <Carousel opts={{align: "start", loop: true }} className="w-full " >
          <CarouselContent>
            {bestSellerDeal.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6 text-center pl-2">
                <ProductCard key={product.id} product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </section>


      <section className="mt-4 container">
        <div className="my-4">
          <p className="text-3xl text-center font-bold uppercase">Summer Sale</p>
        </div>
        <Carousel opts={{align: "start", loop: true }} className="w-full " >
          <CarouselContent>
            {SummerSaleDeal.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6 text-center pl-2">
                <ProductCard key={product.id} product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </section>

      <section className="mt-4 container">
        <div className="my-4">
          <p className="text-3xl text-center font-bold uppercase">New Arrivals</p>
        </div>
        <Carousel opts={{align: "start", loop: true }} className="w-full " >
          <CarouselContent>
            {NewArrivalDeal.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6 text-center pl-2">
                <ProductCard key={product.id} product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </section>
      <section>
      {/* {Brands.map(({id, title}: any) => (
        <p>{title}</p>
      ))} */}
      </section>
      <footer className="p-4">
        Footer
      </footer>

    </>
  )
}

