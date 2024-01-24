import Rating from "@/components/Rating";
import Review from "@/components/Review";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="m-auto w-80 my-20 flex flex-col gap-7">
      <section className="flex flex-col gap-5 items-center">
        <Title>10,000+ of our users love our products.</Title>
        <Text>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </Text>
      </section>
      <section className="flex flex-col gap-3">
        <Rating>Rated 5 Stars in Reviews</Rating>
        <Rating>Rated 5 Stars in Report Guru</Rating>
        <Rating>Rated 5 Stars in BestTech</Rating>
      </section>
      <section className="flex flex-col gap-3">
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
          name="Irene Roberts"
          authorImage="/assets/image-irene.jpg"
          review='
            "Customer service is always excellent and very quick turn around.
            Completely delighted with the simplicity of the purchase and the speed
            of delivery."
          '
        />
        <Review
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
  );
};

export default Home;
