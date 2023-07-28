import {Document, PDFViewer, Page, StyleSheet, Text, View,} from "@react-pdf/renderer";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "../styles/colors.scss";
import dateString from "../utilities/dateString";
import educations from "../information/educations";
import experiences from "../information/experiences";
import person from "../information/person";
import skills from "../information/skills";

const Resume = () => {

    const styles = StyleSheet.create({
            "heading": {
                "textAlign": `center`,
                "width": `100%`,
            },
            "page": {
                "backgroundColor": colors.white,
                "fontSize": 10,
                "lineHeight": 1.4,
            },
            "section": {
                "paddingHorizontal": 30,
                "paddingVertical": 10,
            },
            "subtitle": {
                "borderBottom": 1,
                "width": `100%`,
            },
            "title": {
                "fontSize": 16,
                "paddingTop": 20,
            },
        },),
        ResumeDocument = () => <Document
            title={person.name}
            author={person.name}
            subject={`${person.name}'s ${person.title} Resume`}
            keywords={`${person.name}, ${person.title},${skills.map((skill,) => ` ${skill.title}`,)}`}
            creator={person.name}
            producer={person.name}
            language="en">
            <Page
                size="A4"
                style={styles.page}>
                <View
                    style={styles.heading}>
                    <Text
                        style={styles.title}>
                        {person.name}
                    </Text>
                    <Text>
                        {person.phone} • {person.email} • {person.website}
                    </Text>
                </View>
                <View
                    style={styles.section}>
                    <Text
                        style={styles.subtitle}>
                        EDUCATION
                    </Text>
                    {
                        educations.map((education,) => <>
                            <View
                                style={{"flexDirection": `row`,}}>
                                <View
                                    style={{
                                        "textAlign": `left`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {education.degree}, {education.major}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        "textAlign": `right`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {dateString(
                                            education.start,
                                            education.end,
                                        )}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{"flexDirection": `row`,}}>
                                <View
                                    style={{
                                        "textAlign": `left`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {education.school}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        "textAlign": `right`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {education.city}, {education.state}
                                    </Text>
                                </View>
                            </View>
                            <Text>
                                {education.gradePointAverage.toFixed(1,)} GPA
                            </Text>
                        </>,)
                    }
                </View>
                <View
                    style={styles.section}>
                    <Text
                        style={styles.subtitle}>
                        EXPERIENCE
                    </Text>
                    {
                        experiences.map((experience,) => <>
                            <View
                                style={{"flexDirection": `row`,}}>
                                <View
                                    style={{
                                        "textAlign": `left`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {experience.title}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        "textAlign": `right`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {dateString(
                                            experience.start,
                                            experience.end,
                                        )}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{"flexDirection": `row`,}}>
                                <View
                                    style={{
                                        "textAlign": `left`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {experience.company}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        "textAlign": `right`,
                                        "width": `100%`,
                                    }}>
                                    <Text>
                                        {experience.city}, {experience.state}
                                    </Text>
                                </View>
                            </View>
                            {
                                experience.contributions.map((contribution,) => <View
                                    style={{
                                        "flexDirection": `row`,
                                        "paddingHorizontal": 20,
                                    }}>
                                    <Text>
                                        •
                                    </Text>
                                    <Text
                                        style={{"paddingLeft": 10,}}>
                                        {contribution}
                                    </Text>
                                </View>,)
                            }
                        </>,)
                    }
                </View>
            </Page>
        </Document>;

    return <PDFViewer
        className="width-100 viewport-height-90 padding-top-3"
        showToolbar={true}>
        <ResumeDocument />
    </PDFViewer>;

};

export default Resume;
