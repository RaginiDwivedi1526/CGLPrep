@echo off
echo Copying parent feature images...
set SRC=C:\Users\ragin\.gemini\antigravity-ide\brain\10aeff07-14dd-4ccb-aa16-c95f77f69c98
set DEST_P=c:\CGL PrepAI\client\public\images\parents
set DEST_W=c:\CGL PrepAI\client\public\images\why
set DEST_M=c:\CGL PrepAI\client\public\images\mocktests

REM Parent images
copy "%SRC%\parent_hero_image_1789054601053.jpg" "%DEST_P%\parent-hero.jpg"
copy "%SRC%\parent_family_cta_1789054617580.jpg" "%DEST_P%\parent-family-cta.jpg"
copy "%SRC%\parent_avatar_neha_1789054648665.jpg" "%DEST_P%\avatar-neha.jpg"
copy "%SRC%\parent_avatar_rajesh_1789054661069.jpg" "%DEST_P%\avatar-rajesh.jpg"
copy "%SRC%\parent_avatar_pooja_1789054674117.jpg" "%DEST_P%\avatar-pooja.jpg"

REM Why It Matters images
copy "%SRC%\why_hero_image_1789055327695.jpg" "%DEST_W%\why-hero.jpg"
copy "%SRC%\why_family_impact_1789055360710.jpg" "%DEST_W%\why-family.jpg"

REM Mock Tests images
copy "%SRC%\mock_hero_image_1789055867876.jpg" "%DEST_M%\mock-hero.jpg"
copy "%SRC%\mock_testimonial_ankit_1789056396450.jpg" "%DEST_M%\mock-ankit.jpg"
copy "%SRC%\mock_sectional_hero_1789057306928.jpg" "%DEST_M%\mock-sectional-hero.jpg"
copy "%DEST_M%\mock-ankit.jpg" "%DEST_M%\mock-rohit.jpg"
copy "%DEST_P%\avatar-neha.jpg" "%DEST_M%\mock-neha.jpg"

echo Done! Allecho Image copy complete.

mkdir "c:\CGL PrepAI\client\public\images\currentaffairs" 2>nul
copy /y "c:\CGL PrepAI\client\public\images\hero-bg.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\parliament-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-satellite.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-news1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-dashboard.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-news2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-news3.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\avatar-ankit.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-kalam.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-community.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-ana1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-ana2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\ca-ana3.jpg"

copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-sep.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-aug.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-jul.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-jun.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-may.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-cover-apr.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-sectional-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\camag-student.jpg"

copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-nat.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-int.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-eco.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-pol.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-sci.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-env.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-def.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-sch.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-spo.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-awa.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-sum.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-rep.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-app.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\catopic-misc.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cat-news1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cat-news2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cat-news3.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cat-news4.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cat-news5.jpg"

copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-trophy.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-rec1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-rec2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-rec3.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-rec4.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-rec5.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av3.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av4.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av5.jpg"
copy /y "c:\CGL PrepAI\client\public\images\parents\parent-avatar-1.png" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-av-you.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\caquiz-mega.jpg"

copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cadocs-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cadocs-budget.jpg"

copy /y "c:\CGL PrepAI\client\public\images\features\feat-analytics.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-hero.png"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2026.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2025.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2024.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2023.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2022.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2021.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2020.jpg"
copy /y "c:\CGL PrepAI\client\public\images\mocktests\mock-hero.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-2019.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-add1.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-add2.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-add3.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-add4.jpg"
copy /y "c:\CGL PrepAI\client\public\images\features\feat-study.jpg" "c:\CGL PrepAI\client\public\images\currentaffairs\cayear-add5.jpg"

echo Current Affairs placeholders copy complete.

pause
