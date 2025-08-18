import { View, Text } from "@react-pdf/renderer";
import {
  Section,
  SectionBody,
  SectionSubHeader,
  SectionHeader,
} from "./sections";
import experiences from "../../assets/experience.json";
import { BulletListItem } from "./BulletListItem";
import { Badge } from "./Badge";
import { Keywords } from "./keywords";

export function SecondPage() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#f7ede2",
        padding: 35,
      }}
    >
      <Section>
        <SectionHeader>
          <Text>Experience</Text>
        </SectionHeader>
        <SectionBody style={{ flexDirection: "column", gap: 30 }}>
          {experiences.map((experience, i) => (
            <View key={i} style={{ gap: 4 }}>
              <SectionSubHeader>
                <Text>
                  {experience.title} — {experience.company}
                </Text>
              </SectionSubHeader>
              <Text style={{ fontStyle: "italic" }}>{experience.date}</Text>
              <Text>{experience.note}</Text>
              {experience.bullets.map((text, i) => (
                <BulletListItem key={i} text={text} />
              ))}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 5,
                  marginTop: 4,
                }}
              >
                {experience.tools.map((skill, i) => (
                  <Badge
                    key={i}
                    skill={skill}
                    style={{ border: "1px solid #d9d9d9" }}
                  />
                ))}
              </View>
            </View>
          ))}
        </SectionBody>
        <Keywords />
      </Section>
    </View>
  );
}
