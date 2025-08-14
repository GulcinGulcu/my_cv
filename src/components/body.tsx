import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  SectionHeader,
  Section,
  SectionBody,
  SectionSubHeader,
} from "./sections";
import skills from "../../assets/skills.json";
import { Badge } from "./Badge";

function Body() {
  return (
    <View style={styles.main}>
      <View style={styles.sectionLeft}>
        <Section>
          <SectionHeader>
            <Text>General Information</Text>
          </SectionHeader>
          <SectionBody>
            <Text>
              Frontend Developer with a strong focus on building responsive,
              accessible, and visually engaging web experiences. Skilled in
              HTML, CSS, JavaScript, and modern libraries like{" "}
              <Text style={{ fontWeight: "bold" }}>ReactJS / NextJS</Text>, with
              hands-on experience turning design concepts into clean, functional
              code.
            </Text>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Projects</Text>
          </SectionHeader>
        </Section>
      </View>
      <View style={styles.sectionRight}>
        <Section>
          <SectionHeader>
            <Text>Technical Skills</Text>
          </SectionHeader>
          <SectionBody
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}
          >
            {skills.map((skill) => (
              <Badge key={skill} skill={skill}></Badge>
            ))}
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Languages</Text>
          </SectionHeader>
          <SectionBody>
            <Text>
              Advanced level <Text style={{ fontWeight: "bold" }}>English</Text>
              , native in <Text style={{ fontWeight: "bold" }}>Turkish</Text>,
            </Text>
            <Text>
              conversational level{" "}
              <Text style={{ fontWeight: "bold" }}>Swedish</Text>.
            </Text>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Education</Text>
          </SectionHeader>
          <SectionBody style={{ flexDirection: "column", gap: 15 }}>
            <View style={{ gap: 6 }}>
              <SectionSubHeader>
                <Text style={{ fontSize: 11 }}>
                  Frontend Development Program, Code2Career Bootcamp
                </Text>
              </SectionSubHeader>
              <Text style={{ fontStyle: "italic" }}>
                Sweden, 2023 January - 2024 February
              </Text>
              <Text>
                Intensive, project-based program covering HTML, CSS, JavaScript,
                React, and responsive design. Completed real-world projects,
                collaborated in agile teams, and built a portfolio showcasing
                clean, maintainable code.
              </Text>
            </View>
            <View style={{ gap: 6 }}>
              <SectionSubHeader>
                <Text style={{ fontSize: 11 }}>
                  Bachelor's Degree In Teacher Training, Anadolu University
                </Text>
              </SectionSubHeader>
              <Text style={{ fontStyle: "italic" }}>Turkiye</Text>
            </View>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>References</Text>
          </SectionHeader>
        </Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#f7ede2",
  },
  sectionLeft: {
    width: "60%",
    padding: "20 20 20 30",
    gap: 20,
  },
  sectionRight: {
    width: "40%",
    backgroundColor: "#d6ccc2",
    padding: "20 30 20 20",
    gap: 20,
  },
});

export default Body;
