import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    var quotes = [
        "Don\'t beat your meat, eat your meat.",
        "Feeling cold but wish I was bold.",
        "Made an oopsie so going poopsie.",
        "Am exhausted, brain feeling losted.",
        "Feeling like a gamer, but not a lamer.",
        "Snuggle yourself, so you don't end up on a shelf.",
        "Butterfly pose, if you like toes.",
        "Use a mouse, to catch yourself a spouse.",
        "Eat some ice to fend off the mice",
        "A chipmunk can smash a punk",
        "Workout with us so you don\'t turn into a bus",
        "Poke a friend with a pen to turn them into a ten",
        "Point at some glasses and get A's in classes",
        "Put in some earbuds and soak in some suds",
        "Put on your hood to get rid of morning wood",
        "Drink some tea if you need to pee",
        "Three peas in a pod all in one great pod",
        "Go to the Wild West to escape the test",
        "Be a nerd not a turd",
        "Eat some SunChips to grow big lips",
        "Do a FaceTime and eat a lime",
        "If you want to be hot, lay on a cot",
        "What's up! Use a cup",
        "Hang out in the car so you don\'t run into a bar",
        "If you have a swollen eye eat some pie",
        "Eat ice cream and slides to overcome the high and low tides",
        "Go to the mall but make sure you don\'t fall",
        "Be with your mom because she\'s the bomb",
        "Lift up your arm to do some harm",
        "Eat an eraser so you don\'t have to use a razor",
        "Hang out with parents or your car will have dents",
        "Do some rehab or take a cab",
        "Spread some confetti to find a yeti",
        "Have a drink and give us a wink",
        "Be tacky or be wacky",
        "Want a tape baby, call us maybe!",
        "Don't be sad, be a lad",
        "Eat a bun if you want a hun"
    ]

    var randomNum = Math.floor(Math.random() * (quotes.length));

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Rhyme of the Day
                </Typography>
                <Typography variant="h5" component="h2" id="quotedisp">
                    {quotes[randomNum]}
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    Peaches are yummy
                    <br />
                    {'"a benevolent smile"'}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
