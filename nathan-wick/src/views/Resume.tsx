import {Document, PDFViewer, Page, StyleSheet, Text, View,} from "@react-pdf/renderer";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from "../styles/colors.scss";
import person from "../information/person";
import skills from "../information/skills";

const Resume = () => {

    const styles = StyleSheet.create({
            "page": {
                "backgroundColor": colors.white,
                "flexDirection": `row`,
            },
            "section": {
                "flexGrow": 1,
                "margin": 10,
                "padding": 10,
            },
        },),
        ResumeDocument = () => <Document
            title={`${person.name} Resume`}
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
                    style={styles.section}>
                    <Text>
                        Section #1
                    </Text>
                </View>
                <View
                    style={styles.section}>
                    <Text>
                        Section #2
                    </Text>
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
