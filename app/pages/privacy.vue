<template>
    <Card title="Privacy Policy">
        <div class="container">
            <h2>1. Who We Are</h2>
            This app (“we”, “our”, or “us”) is a platform for tracking progress and participation across houses/groups
            within
            schools, churches, and other organizations.

            <h2>2. What We Collect</h2>
            We collect only the data necessary to provide our service:
            <ul>
                <li>Names and emails of users</li>
                <li>Group/house affiliation</li>
                <li>Admin-created organization info</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            We use your data only to:
            <ul>
                <li>Display progress to your group or organization</li>
                <li>Provide reporting tools to leaders</li>
                <li>We may collect anonymized usage data if you opt-in to help improve the app.</li>
                <li>We retain your data only as long as necessary to provide the service.</li>
            </ul>

            We do not:
            <ul>
                <li>Sell your data</li>
                <li>Use your data for advertising</li>
                <li>Share your data outside your organization</li>
            </ul>

            <h2>4. Who Can See Your Data</h2>
            <ul>
                <li>Organization admins can view all progress and participation data from their organization.</li>
                <li>Personal data may be visible only to admins or optionally shared with a group.
                </li>
            </ul>

            <h2>5. Cookies and Analytics</h2>
            We may use cookies or analytics tools to improve the app experience. No personal data is shared with third
            parties
            for advertising.

            <h2>6. Your Rights</h2>
            If you are a user and want your data removed, contact your organization admin or email us at
            <Email />

            <h2>7. Data Security</h2>
            We follow reasonable security practices to protect your data, including encryption and secure
            authentication.

            <h2>8. Children</h2>
            This app may be used by students, including minors, under the supervision of their organization. We do not
            knowingly collect personal data directly from children under 13 without organization consent.

            <h2>9. Contact</h2>
            If you have any questions, contact us at:
            <SupportEmail />
            <!-- [your domain or contact form link] -->
        </div>
    </Card>
</template>

<script lang="ts" setup>

definePageMeta({
    layout: "tab-view"
});
</script>


<style lang="scss" scoped>
.container {
    text-align: left;
}
</style>
