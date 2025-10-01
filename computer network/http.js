// for communication b/w 2 system we need some set of rules and regularation and these rules are defined as protocols

//so we do have 7 layers
//application layer(http,https,smtp/imap) 
//it is divided into 2 parts
//A.client-server protocols->one way communication
//1.http,https,smtp ->only when the client send req to server then only sever gives response to client (one way communication)
// web sockets bydirectional communication -> client can talk to server and server can talk to client (designing messaging app)
//smtp used for sending sending the mail and imap is used for accessing/read the mail


//peer 2 peer protocols
//webrtc in which two machine can talk each other without any server that why it is fast 


//presentation layer->(translation layer) (encryption/decryption/compression)
//session layer (responsible for opening/closing the communication between two devices, and the time between opening and closing is called the session he session layer and this layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.

// transport and network layer
//tcp/ip-> here we maintain virtual connection and we divide data into small packets then arrange them in sequential manner(order is maintained ) and then start moving these packets b/w source and destination and once the packets acknowledgment is send by destination 
// udp/ip -> no connection is maintain and no ordering is not maintain (its fast) no acknowledgement is send (live steaming and video calling apps) webtrc uses udp protocol to send data


// **data layer** 

// The data link layer is very similar to the network layer, except the data link layer facilitates data transfer between two devices on the same network. The data link layer takes packets from the network layer and breaks them into smaller pieces called frames.

// **physical layer**

// This layer includes the physical equipment involved in the data transfer, such as the cables and switches. This is also the layer where the data gets converted into a bit stream, which is a string of 1s and 0s.