FROM node:18-slim
WORKDIR /
COPY . .

RUN npm install
RUN npm run build

ENV MONGO_URI=mongodb+srv://edgarAndrew:mangotree123@cluster0.icaqeao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
ENV JWT_SECRET=(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUj
ENV JWT_LIFETIME=5d
ENV COMP_PASS=computer@123
ENV IT_PASS=it@123
ENV ETC_PASS=etc@123
ENV MECH_PASS=mech@123
ENV CIVIL_PASS=civil@123
ENV ENE_PASS=ene@123
ENV VLSI_PASS=vlsi@123
ENV ADMIN=admin@123
ENV CLOUDINARY_NAME=dzpgkq215
ENV CLOUDINARY_KEY=155786252999671
ENV CLOUDINARY_SECRET=WKWo93PucX3qtODcUK2I7Q319WQ
ENV ZEPTO_MAIL_TOKEN=Zoho-enczapikey PHtE6r0KS7+5jzYm9EII46WwE8L2N4Io++5iLAhA5YlDC6AEH01cot4vwze0rht+B6ZGFPeem4to5OycsriCJjm5Yz0dWWqyqK3sx/VYSPOZsbq6x00asFoTdE3ZVYfpetBo3SbUv93YNA==

EXPOSE $PORT

CMD node dist/app.js