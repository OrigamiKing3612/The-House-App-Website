<template>
    <ChangelogPage :data="data.changelogs['0.4.0']">
        <p>This update brings fixes to many things such as the Point Presets and UI</p>
        <h1>Point Presets v2</h1>
        <p>This update brings a complete overhaul to point presets. Point Presets are now more user friendly and have
            greater customization options.</p>
        <ul>
            <li>
                <b>User Types</b>: Presets can be set to only show up for specific user types (ex. only show up for
                deans)
            </li>
            <li>
                <b>Admin Approval</b>: Presets can be set to require admin approval before being awarded.
            </li>
            <li>
                <b>Deleting Points</b>: Points can now be deleted from a house.
            </li>
        </ul>
        <h1>Live Updating Standings Page</h1>
        <p>
            The Standings page now updates in real time as points are awarded. No need to refresh the page to see the
            latest
        </p>
        <h1>UI Improvements</h1>
        <p>
            We have many various UI improvements across the app. Some of the more notable ones are:
        </p>
        <ul>
            <li>Larger sidebar button on smaller screens</li>
            <li>Improved animations on icons</li>
            <li>Improved loading speed when looking at a house</li>
            <li>Comments page now reflects the announcements page</li>
            <li>The Houses page now takes up more of the screen</li>
        </ul>
        <h1>Notifications</h1>
        <p>
            You can now receive notifications when your house receives points. You can enable/disable these in your
            profile notification settings.
        </p>
    </ChangelogPage>
</template>
