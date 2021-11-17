import {
  Container, Heading, Image, Link, Text,
} from '@chakra-ui/react'

export default () => {
  return (
    <Container>
      <Heading my={55} textAlign="center">A New (Black) Market 🏴</Heading>

      <Heading fontSize="lg" mb={2} textAlign="center" id="purchasing">Purchasing</Heading>

      <Text textAlign="justify" style={{ textIndent: "1em" }}>This is a thought experiment on the subject of how the current black market for the distribution of substances might be replaced by something violence and theft-free while providing more reliable service.</Text>

      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>The heart of the system is the Dealer. They are the driving force behind the progression of the process which begins with the Dealer intermediating between Customers and Suppliers:</Text>

      <Image maxH="22em" my={8} w="full" src="circle%20%231.svg"/>
      
      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>From the Suppliers the Dealer gets prices for large quantities. From these, they generate product listings for smaller amounts and send them to the customers. Listings include a down payment percentage required at the outset.</Text>
      
      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>Customers respond with tentative offers to purchase from the product listings. These offers include generalized location information in the form of travel time to a waypoint. If the dealer gets a sufficient number of offers in compatible locations, they respond with an opportunity to purchase.</Text>
      
      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>If a sufficient number of Customers respond with escrow and down payments, the Dealer places makes a purchase with the Supplier.</Text>
 
      <Heading fontSize="lg" mt={10} mb={2} textAlign="center" id="processing">Processing</Heading>

      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>The next step involves the decomposition of the bulk supply to customer orders. The primary agent is the Distributor who may not be the same party as the Dealer.</Text>
 
      <Image maxH="20em" my={8} w="full" src="circle%20%232.svg"/>

      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>The Supplier ships to the Distributor who records as much of the preperation process as possible, beginning with the unboxing and verification of the weight.</Text>
      
      <Text mt={3} textAlign="justify" style={{ textIndent: "1em" }}>One of the first things the Distributor does is send a sample of the supply to a <Link to="https://energycontrol-international.org/drug-testing-service/">lab</Link> for testing. The supply is divided into quantities as specified by the orders from <Link to="#purchasing">purchasing</Link>, packaged, and affixed with a QR code.</Text>
    </Container>
  )
}