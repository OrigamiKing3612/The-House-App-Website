<template>
    <div id="index">
        <section class="intro">
            <ClientOnly>
                <div class="logo">
                    <NuxtImg v-if="colorMode.value === 'dark'" src="/logo-wordmark-dark.png" alt="House App Logo" />
                    <NuxtImg v-else src="/logo-wordmark.png" alt="House App Logo" />
                </div>
            </ClientOnly>

            <h1 class="tagline">
                Building community through friendly competition
            </h1>
        </section>
        <Card title="About the House System" class="index-card">
            <section class="about-section">
                <h2></h2>
                <p>Originating in British Commonwealth boarding schools, the house system has evolved into a
                    cornerstone of educational institutions worldwide. It not only provides organizational structure
                    but also cultivates leadership and community among students.</p>
            </section>
        </Card>
        <Card title="About The App" class="index-card">
            <section class="about-section">
                <p>The House App is a cutting-edge tool designed to enrich the educational journey for students and
                    teachers alike. It offers insights to track house-related activities and achievements, fostering
                    engagement within the school community. There is also a <NuxtLink class="text-link"
                        to="https://desktop.the-house-app.com/example" external>full example of the
                        app</NuxtLink>.</p>
            </section>
        </Card>
        <Card title="Key Features" class="index-card">
            <section class="key-features">
                <ul>
                    <li class="list-item">
                        <span class="bold">Customizable Houses:</span> Tailor the app to reflect your school’s
                        unique culture by creating and customizing house names, colors, and even adjusting the
                        number of houses.
                    </li>
                    <li class="list-item">
                        <span class="bold">Instant Recognition:</span> Deans can effortlessly award points to
                        deserving students via the app, ensuring prompt acknowledgment of their efforts.
                    </li>
                    <li class="list-item">
                        <span class="bold">Announcements:</span> Administrators can broadcast crucial announcements
                        to all users, fostering effective communication and transparency.
                    </li>
                    <li class="list-item">
                        <span class="bold">Calendar:</span> Administrators can create a calendar for students,
                        leaders, and/or deans. This system allows for even more communication.
                    </li>
                    <li class="list-item">
                        <span class="bold">Not Just for Schools:</span> Any type of organization can use the app, it
                        may even contain customized features to that organization.
                    </li>
                </ul>
            </section>
        </Card>
        <Card title="More Info" class="index-card">
            <section>
                <p>If you would like more details, please reach out by email at
                    <InfoEmail />.
                </p>
            </section>
        </Card>
        <Card title="Ready to Use the App?" class="index-card">
            <section class="login-section">
                <p>
                    If you're part of a school or organization using The House App, you can <NuxtLink class="text-link"
                        to="https://desktop.the-house-app.com" external>log in </NuxtLink>.
                </p>
            </section>
        </Card>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

definePageMeta({
    title: "The House App"
});
</script>

<style scoped lang="scss">
#index {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.intro {
    max-width: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    margin: 10em;

    .image {}

    h1 {}
}

.index-card {
    max-width: 80%;
    width: 100%;
    text-align: left;
}

@media (max-width: 650px) {
    .intro {
        flex-direction: column;
        margin: 5em;

        .logo {
            margin-bottom: 2em;
        }
    }
}
</style>
