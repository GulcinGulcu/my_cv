import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  SectionHeader,
  Section,
  SectionBody,
  SectionSubHeader,
} from "./sections";
import skills from "../../assets/skills.json";
import experiences from "../../assets/experience.json";
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
            <Text>Experience</Text>
          </SectionHeader>
          <SectionBody style={{ flexDirection: "column", gap: 10 }}>
            {experiences.map((experience, i) => (
              <View key={i} style={{ gap: 4 }}>
                <SectionSubHeader>
                  <Text>
                    {experience.title} / {experience.company}
                  </Text>
                </SectionSubHeader>
                <Text style={{ fontStyle: "italic" }}>{experience.date}</Text>
                <Text>{experience.note}</Text>
              </View>
            ))}
          </SectionBody>
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
    padding: "14 14 14 20",
    gap: 15,
  },
  sectionRight: {
    width: "40%",
    backgroundColor: "#d6ccc2",
    padding: "14 20 14 14",
    gap: 15,
  },
});

export default Body;
