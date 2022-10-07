import React from "react";
import Image from "next/image";
import bgImage from "../../public/images/landpic-2.jpg";
import { getPlastics } from "../../utils/getPlastics";

export async function getStaticPaths() {
  const res = await getPlastics();

  const paths = res.map((plastic) => ({
    params: { dealerId: String(plastic._id) },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const plastic = await getPlastics(context.params.plasticId);
  return {
    props: {
      plastic,
    },
  };
}

const PlasticDealerDetails = ({ plastic }) => {
  return (
    <section className="max-w-5xl mx-10 lg:mx-auto py-10 space-y-5 bg-white p-10 mt-5 rounded-md">
      <h1 className="text-3xl text-center mb-10 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore?
      </h1>
      <hr />
      {plastic.title}
      <div className="h-40 md:h-60 lg:h-96 overflow-hidden bg-slate-400">
        <Image
          src={bgImage}
          layout="responsive"
          objectFit="cover"
          blurDataURL="true"
        />
      </div>
      <div className="space-y-5">
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cum
          quibusdam dolorum officia neque dolore aperiam ducimus perspiciatis,
          corrupti natus consectetur maiores minima quis incidunt nobis.
          Voluptatum ipsum maiores totam. Saepe voluptates officiis vero omnis,
          debitis at eum asperiores, error earum sit alias, optio dolorem
          deserunt pariatur quis! Porro maiores voluptates animi, enim dicta
          quis placeat blanditiis nesciunt quae odio. Quo praesentium neque
          incidunt! Nostrum, labore molestias? Autem aliquam fuga officiis iusto
          magnam voluptatem quo, animi, quam beatae hic placeat consequatur
          molestiae sequi earum nihil obcaecati, vel at. Velit, illum? Dolores,
          deserunt necessitatibus eos nostrum nobis voluptatibus! Consectetur
          debitis perferendis libero alias similique non asperiores voluptatem
          necessitatibus pariatur delectus. Tempore quis expedita maiores
          aperiam ad dolorem eveniet, fuga iusto totam. Laudantium veniam
          sapiente quasi a eaque, deleniti molestias nisi quo doloremque quidem
          explicabo tempore tempora ipsam quibusdam vel laboriosam aperiam sunt
          recusandae quisquam corporis culpa. Explicabo natus laborum placeat
          possimus.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cum
          quibusdam dolorum officia neque dolore aperiam ducimus perspiciatis,
          corrupti natus consectetur maiores minima quis incidunt nobis.
          Voluptatum ipsum maiores totam. Saepe voluptates officiis vero omnis,
          debitis at eum asperiores, error earum sit alias, optio dolorem
          deserunt pariatur quis! Porro maiores voluptates animi, enim dicta
          quis placeat blanditiis nesciunt quae odio. Quo praesentium neque
          incidunt! Nostrum, labore molestias? Autem aliquam fuga officiis iusto
          magnam voluptatem quo, animi, quam beatae hic placeat consequatur
          molestiae sequi earum nihil obcaecati, vel at. Velit, illum? Dolores,
          deserunt necessitatibus eos nostrum nobis voluptatibus! Consectetur
          debitis perferendis libero alias similique non asperiores voluptatem
          necessitatibus pariatur delectus. Tempore quis expedita maiores
          aperiam ad dolorem eveniet, fuga iusto totam. Laudantium veniam
          sapiente quasi a eaque, deleniti molestias nisi quo doloremque quidem
          explicabo tempore tempora ipsam quibusdam vel laboriosam aperiam sunt
          recusandae quisquam corporis culpa. Explicabo natus laborum placeat
          possimus.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cum
          quibusdam dolorum officia neque dolore aperiam ducimus perspiciatis,
          corrupti natus consectetur maiores minima quis incidunt nobis.
          Voluptatum ipsum maiores totam. Saepe voluptates officiis vero omnis,
          debitis at eum asperiores, error earum sit alias, optio dolorem
          deserunt pariatur quis! Porro maiores voluptates animi, enim dicta
          quis placeat blanditiis nesciunt quae odio. Quo praesentium neque
          incidunt! Nostrum, labore molestias? Autem aliquam fuga officiis iusto
          magnam voluptatem quo, animi, quam beatae hic placeat consequatur
          molestiae sequi earum nihil obcaecati, vel at. Velit, illum? Dolores,
          deserunt necessitatibus eos nostrum nobis voluptatibus! Consectetur
          debitis perferendis libero alias similique non asperiores voluptatem
          necessitatibus pariatur delectus. Tempore quis expedita maiores
          aperiam ad dolorem eveniet, fuga iusto totam. Laudantium veniam
          sapiente quasi a eaque, deleniti molestias nisi quo doloremque quidem
          explicabo tempore tempora ipsam quibusdam vel laboriosam aperiam sunt
          recusandae quisquam corporis culpa. Explicabo natus laborum placeat
          possimus.
        </p>
      </div>
    </section>
  );
};

export default PlasticDealerDetails;
