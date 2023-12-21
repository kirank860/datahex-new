var express = require("express");
var router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Get home data
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/", async function (req, res, next) {
  try {
    const newsData = [
      {
        title: "Best tips to develop a mutual fund investment",
        content:
          "Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.",
        imageSrc: "/img/work2.png",
      },
      {
        title: "Best tips to develop a mutual fund investment",
        content:
          "Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.",
        imageSrc: "/img/work1.png",
      },
      {
        title: "Best tips to develop a mutual fund investment",
        content:
          "Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.",
        imageSrc: "/img/work1.png",
      },
      // Add more news items as needed
    ];
    // Define your data
    const servicesData = [
      {
        id: "content-1",
        title: "Software Development",
        description:
          "Our software development services encompass a wide array of solutions tailored to meet your business needs. From crafting robust and scalable applications to optimizing existing systems, our team of dedicated developers ensures the highest standards of quality and efficiency. Utilizing cutting-edge technologies, we bring innovation to your digital solutions. Our agile development approach allows for flexibility and adaptability throughout the project lifecycle. We are committed to delivering software that not only meets but exceeds your expectations. Let us turn your ideas into reality with our expertise in software development.",
      },
      {
        id: "content-2",
        title: "Web Development",
        description:
          "In the realm of web development, we excel at creating dynamic and user-friendly websites. Our team combines creativity and functionality to design web solutions that resonate with your audience. Whether you need a corporate website, an e-commerce platform, or a custom web application, we have the expertise to bring your vision to life. We prioritize user experience, ensuring that your website not only looks great but also performs seamlessly across devices. Trust us to build a web presence that strengthens your brand and engages your visitors effectively.",
      },
      {
        id: "content-3",
        title: "App Development",
        description:
          "Elevate your business with our bespoke app development services. We specialize in crafting intuitive and feature-rich mobile applications that cater to diverse platforms. From conceptualization to deployment, our app development process is meticulous, ensuring a smooth user experience. Whether you need an iOS, Android, or cross-platform solution, we leverage the latest technologies to create apps that stand out in the competitive market. Our focus on user-centric design and functionality guarantees that your app not only meets user expectations but also enhances your business objectives.",
      },
      {
        id: "content-4",
        title: "Digital Marketing",
        description:
          "Navigate the digital landscape with our comprehensive digital marketing services. We go beyond traditional marketing approaches, utilizing the power of digital channels to boost your online presence and drive measurable results. Our digital marketing strategies encompass SEO, social media, content marketing, and more. We tailor our approach to suit your business goals, ensuring a targeted and effective campaign. With a data-driven mindset, we analyze results and optimize strategies for continuous improvement. Let us be your digital partner in achieving visibility, engagement, and conversion in the ever-evolving online world.",
      },
      {
        id: "content-5",
        title: "UI/UX Design + Development",
        description:
          "Immerse your audience in a visually stunning and intuitively designed digital experience with our UI/UX design and development services. We understand the importance of user interface and experience in capturing and retaining user attention. Our team of designers and developers collaborates to create seamless and aesthetically pleasing designs that enhance user interaction. From wireframes to the final product, we prioritize user feedback and usability testing to refine and optimize the user journey. Elevate your brand with a captivating and user-friendly design that resonates with your target audience.",
      },
    ];

    res.render("index", { newsData, servicesData });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
