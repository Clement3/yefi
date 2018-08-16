# Use an official node image as a parent image
FROM node
# Set the working directory to /usr/src/app
WORKDIR /usr/src/app
# Copy package.json on /usr/src/app
COPY package.json /usr/src/app
# Copy package-lock.json on /usr/src/app
COPY package-lock.json /usr/src/app
# Install any needed packages
# RUN npm install --only=production
RUN npm install
# Install ts-node
RUN npm install ts-node -g
# Copy the current directory contents into the container at /usr/src/app
COPY . /usr/src/app
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run these command when the container launches
CMD ["npm", "run", "dev"]