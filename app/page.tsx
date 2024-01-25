import Background from "@/components/Background";
import Rating from "@/components/Rating";
import Review from "@/components/Review";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <>
      <Background />
      <main className="z-10 m-auto flex w-80 flex-col gap-7 lg:grid lg:w-[70rem] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-0 lg:gap-y-20">
        <section className="flex flex-col items-center gap-5 lg:pr-24">
          <Title>10,000+ of our users love our products.</Title>
          <Text>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </Text>
        </section>
        <section className="flex flex-col gap-3 lg:gap-5 lg:pt-8">
          <Rating>Rated 5 Stars in Reviews</Rating>
          <Rating className="lg:ml-14">Rated 5 Stars in Report Guru</Rating>
          <Rating className="lg:ml-28">Rated 5 Stars in BestTech</Rating>
        </section>
        <section className="flex flex-col gap-3 lg:col-start-1 lg:col-end-3 lg:flex-row lg:gap-8">
          <Review
            name="Colton Smith"
            authorImage="/assets/image-colton.jpg"
            review='
              "We needed the same printed design as the one we had ordered a week 
              prior. Not only did they find the original order, but we also received
              it in time. Excellent!"
            '
          />
          <Review
            className="lg:relative top-4"
            name="Irene Roberts"
            authorImage="/assets/image-irene.jpg"
            review='
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the speed
              of delivery."
            '
          />
          <Review
            className="lg:relative top-8"
            name="Anne Wallace "
            authorImage="/assets/image-anne.jpg"
            review='
              "Put an order with this company and can only praise them for the very
              high standard. Will definitely use them again and recommend them to 
              everyone!"
            '
          />
        </section>
      </main>
    </>
  );
};

export default Home;
