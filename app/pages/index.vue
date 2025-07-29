<template>
    <Card title="The House App">
        <div class="container">
            <!-- <h1 class="title">The House App</h1> -->
            <section class="about-section">
                <h2>About the House System</h2>
                <p>Originating in British Commonwealth boarding schools, the house system has evolved into a
                    cornerstone of educational institutions worldwide. It not only provides organizational structure
                    but also cultivates leadership and community among students.</p>
            </section>
            <section class="about-section">
                <h2>About The App</h2>
                <p>The House App is a cutting-edge tool designed to enrich the educational journey for students and
                    teachers alike. It offers insights to track house-related activities and achievements, fostering
                    engagement within the school community. To see a full example of the app, click <NuxtLink
                        class="example link" style="color: var(--primary)"
                        to="https://desktop.the-house-app.com/example">here</NuxtLink>.</p>
            </section>
            <section class="key-features">
                <h3>Key Features</h3>
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
            <section>
                <p>If you would like more details, please reach out by email at
                    <InfoEmail />.
                </p>
            </section>
            <section class="login-section">
                <h2>Ready to Use the App?</h2>
                <p>
                    If you're part of a school or organization using The House App, you can log in
                    <NuxtLink class="link" style="color: var(--primary)" to="https://desktop.the-house-app.com">
                        here</NuxtLink>.
                </p>
            </section>
        </div>
    </Card>
</template>

<script setup lang="ts">

const current_year = new Date().getFullYear();

definePageMeta({
    layout: "tab-view"
});

</script>

<style scoped lang="scss">
.container {
    text-align: left;
}
</style>
