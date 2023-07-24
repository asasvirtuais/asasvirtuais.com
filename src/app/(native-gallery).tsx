import React from "react"
import { Box, Card, Image } from "@chakra-ui/react"

const srces = [
  "gallery/portfolio/cartorio/main.png",
  "gallery/portfolio/cartorio/modal.png",
  "gallery/portfolio/custom-checkout/checkout.PNG",
  "gallery/portfolio/custom-checkout/mobile.card.jpeg",
  "gallery/portfolio/custom-checkout/mobile.checkout.jpeg",
  "gallery/portfolio/custom-checkout/step1.leads.PNG",
  "gallery/portfolio/custom-checkout/step2.leads.PNG",
  "gallery/portfolio/custom-checkout/step3.leads.PNG",
  "gallery/portfolio/esferaglobal/esferaglobal.clients.png",
  "gallery/portfolio/esferaglobal/features.esferaglobal.png",
  "gallery/portfolio/esferaglobal/footer.esferaglobal.png",
  "gallery/portfolio/esferaglobal/form.esferaglobal.png",
  "gallery/portfolio/esferaglobal/home.esferaglobal.png",
  "gallery/portfolio/esferaglobal/projects.esferaglobal.png",
  "gallery/portfolio/esferaglobal/services.esferaglobal.png",
  "gallery/portfolio/finder-tool/finder-1.png",
  "gallery/portfolio/finder-tool/finder-2.png",
  "gallery/portfolio/finder-tool/finder-3.png",
  "gallery/portfolio/finder-tool/finder-4.png",
  "gallery/portfolio/finder-tool/finder-5.png",
  "gallery/portfolio/finder-tool/finder-6.png",
  "gallery/portfolio/live-university/cursos.live-university.jpeg",
  "gallery/portfolio/live-university/inscrever-se.live-university.jpeg",
  "gallery/portfolio/live-university/notas.live-university.jpeg",
  "gallery/portfolio/live-university/start-here.live-university.jpeg",
  "gallery/portfolio/pool-leads/lead-final.png",
  "gallery/portfolio/pool-leads/lead-step-8.png",
  "gallery/portfolio/pool-leads/lead-step-9.png",
  "gallery/portfolio/pool-leads/lead-step-10.png",
  "gallery/portfolio/pool-leads/lead-step-11.png",
  "gallery/portfolio/pool-leads/lead-step-12.png",
  "gallery/portfolio/pool-leads/lead-step1.png",
  "gallery/portfolio/pool-leads/lead-step2.webp",
  "gallery/portfolio/pool-leads/lead-step3.png",
  "gallery/portfolio/pool-leads/lead-step4.png",
  "gallery/portfolio/pool-leads/lead-step5.png",
  "gallery/portfolio/pool-leads/lead-step6-dots.png",
  "gallery/portfolio/pool-leads/lead-step6.png",
  "gallery/portfolio/pool-leads/lead-step7.png",
].sort( () => 0.5 - Math.random() )

export default function Gallery() {
  return (
    <>
      <Box
        padding={4}
        w="100%"
        mx="auto"
        sx={{ columnCount: [1, 2, 3, 4], columnGap: 4 }}
      >
        {srces.map((src) => (
            <Card mt={4} shadow='base' >
                <Image
                    key={src}
                    w="100%"
                    borderRadius="xl"
                    mb={2}
                    display="inline-block"
                    src={src}
                    alt="Alt"
                />
            </Card>
        ))}
      </Box>
      </>
  )
}