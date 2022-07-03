import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { siteMap } from '../Assets'

export default function HomePages() {
  return (
    <VStack align={"flex-start"}  spacing="5">
        <Text>
             This project utilized machine learning techniques and molecular docking techniqe to screen existing antiviral drugs that can be repurposed as anti-dengue drugs. The pipeline used for the machine learning models developmentis shown below:
        </Text>

        <Image src={siteMap} width="45vw"  />
        <Text>
             Our results showed that HIV integrase inhibitor, cabotegravir, indinavir, delavirdine, vesatolimod, and elsulfavirine can be repurposed as anti-dengue drugs. Since these drugs appear not to have been previously explored against DENV, experimental corroboration is warranted.
        </Text>
    </VStack>
  )
}
