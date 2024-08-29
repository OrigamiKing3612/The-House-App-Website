<template>
    <div class="all">
        <Card width="70">
            <div class="container">
                <h1 class="title">The House App</h1>
                <section class="about-section">
                    <h2>About the House System</h2>
                    <p>Originating in British Commonwealth boarding schools, the house system has evolved into a cornerstone of
                        educational institutions worldwide. It not only provides organizational structure but also cultivates
                        leadership and community among students.</p>
                </section>
                <section class="about-section">
                    <h2>About The App</h2>
                    <p>The House App is a cutting-edge tool designed to enrich the educational journey for students and teachers
                        alike. It offers insights to track house-related activities and achievements, fostering engagement within
                        the school community. To see a full example of the app, click <NuxtLink class="example link" :style="{ color: generateRandomColor() }"
                            to="https://beta-desktop.the-house-app.com/example">here</NuxtLink>.</p>
                </section>
                <section class="key-features">
                    <h3>Key Features</h3>
                    <ul>
                        <li class="list-item">
                            <span class="bold">Customizable Houses:</span> Tailor the app to reflect your school’s unique culture by
                            creating and customizing house names, colors, and even adjusting the number of houses.
                        </li>
                        <li class="list-item">
                            <span class="bold">Instant Recognition:</span> Deans can effortlessly award points to deserving students
                            via
                            the app, ensuring prompt acknowledgment of their efforts.
                        </li>
                        <li class="list-item">
                            <span class="bold">Announcements:</span> Administrators can broadcast crucial announcements to all users,
                            fostering effective communication and transparency.
                        </li>
                        <li class="list-item">
                            <span class="bold">Calendar:</span> Administrators can create a calendar for students, leaders, and/or deans. This system allows for even more communication.
                        </li>
                        <li class="list-item">
                            <span class="bold">Not Just for Schools:</span> Any type of organization can use the app, it may even contain customized features to that organization.
                        </li>
                    </ul>
                </section>
                <section>
                    <p>If you would like more details, please reach out to me by email at <a
                        :style="{ color: generateRandomColor() }"
                        href="mailto:the.house.app.app@gmail.com">the.house.app.app@gmail.com</a>.
                    </p>
                </section>
            </div>
        </Card>
        <Card width="70">
            <p class="title">Copyright (C) 2024, OrigamiKing3612. All Rights Reserved.</p>
        </Card>
    </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 80vh;
  margin: 0 auto;
  padding: 20px;
  color: $text;
}

.title {
  text-align: center;
}

.about-section, .key-features {
  margin-bottom: 30px;
}

.list-item {
  margin-bottom: 10px;
}

.bold {
  font-weight: bold;
}

.example-link {
  text-decoraction: none;
}
</style>

<script setup lang="ts">
import getHouseColor, {houseColors} from "~/compostables/getHouseColor";

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * houseColors.length);
  return getHouseColor(houseColors[randomIndex]);
};
</script>
