import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const CARD_PADDING = 16;

// Color palette
export const COLORS = {
    primary: '#2563EB',      // Vibrant blue
    primaryLight: '#DBEAFE', // Light blue background
    secondary: '#0F766E',    // Teal
    background: '#F0F9FF',   // Very light blue background
    card: '#FFFFFF',         // White
    text: '#1E293B',         // Dark slate
    textLight: '#475569',    // Medium slate
    border: '#CBD5E1',       // Light slate
    accent: '#7C3AED',       // Purple accent
    success: '#059669',      // Green
    error: '#DC2626',        // Red
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    tabContainer: {
        flex: 1,
    },

    tabBar: {
        flexDirection: 'row',
        backgroundColor: COLORS.card,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        paddingTop: 8,
    },

    tabButton: {
        flex: 1,
        paddingVertical: 12,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.textLight,
    },

    tabButtonActive: {
        color: COLORS.primary,
        fontWeight: '600',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
    },

    pagerView: {
        flex: 1,
    },

    header: {
        fontSize: 28,
        color: COLORS.primary,
        fontWeight: "700",
        marginVertical: 24,
        textAlign: "center",
        paddingHorizontal: CARD_PADDING,
    },

    card: {
        backgroundColor: COLORS.card,
        padding: CARD_PADDING,
        borderRadius: 12,
        marginVertical: 8,
        width: width - (CARD_PADDING * 2),
        shadowColor: COLORS.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.secondary,
        marginBottom: 12,
    },

    inputContainer: {
        marginBottom: 12,
        width: '100%',
    },

    label: {
        fontSize: 14,
        color: COLORS.text,
        marginBottom: 6,
        fontWeight: "500",
    },

    textInput: {
        backgroundColor: COLORS.background,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: COLORS.border,
        width: '100%',
    },

    outputCard: {
        backgroundColor: COLORS.primaryLight,
        padding: CARD_PADDING * 2,
        borderRadius: 16,
        marginTop: 24,
        width: width - (CARD_PADDING * 2),
        alignItems: "center",
        justifyContent: "center",
        minHeight: 120,
        borderWidth: 2,
        borderColor: COLORS.primary,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },

    outputText: {
        fontSize: 36,
        fontWeight: "700",
        color: COLORS.primary,
        textAlign: 'center',
    },

    outputLabel: {
        fontSize: 16,
        color: COLORS.secondary,
        marginBottom: 8,
        fontWeight: "600",
        textAlign: 'center',
    },

    footer: {
        marginTop: 24,
        fontSize: 14,
        color: COLORS.textLight,
        paddingHorizontal: CARD_PADDING,
    },

    debugText: {
        fontSize: 12,
        color: COLORS.textLight,
        marginTop: 8,
        paddingHorizontal: CARD_PADDING,
    },

    picker: {
        backgroundColor: COLORS.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    pickerItem: {
        color: COLORS.text,
    }
});