FROM mcr.microsoft.com/playwright:1.54.2-jammy
run mkdir -p /home/seluser/UIDemo/screenshots
WORKDIR /home/seluser/UIDemo
COPY . /home/seluser/UIDemo
RUN npm install --force
RUN npx playwright install --with-deps