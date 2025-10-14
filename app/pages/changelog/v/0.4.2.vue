<template>
    <ChangelogPage :data="data.changelogs['0.4.2']">
        <p>This update brings a redesigned edit users page and bug fixes</p>
        <h1>Redesigned Edit Users page</h1>
        <p>We have redesigned the Edit Users page to be in a table format. You can now see, sort, and take actions
            easier.</p>
        <h1>Authentication</h1>
        <p>We have redone our authentication to be more scalable and secure. This will require <i>everyone</i> to log
            back in.</p>
        <h1>Elevate Popups</h1>
        <p>When deleting something, admins now have an elevate popup to prevent accidental deletions.</p>
        <h1>Bug Fixes</h1>
        <ul>
            <li>Points in the points feed can now be clicked to see more information</li>
            <li>Fixed a bug where points looked like they are added twice in games</li>
        </ul>
    </ChangelogPage>
</template>
